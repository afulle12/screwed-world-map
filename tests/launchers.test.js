import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve(__dirname, '..');

describe('Local Desktop Launchers Suite', () => {
  it('should have a valid Windows native PE32+ GUI executable (WorldMap.exe)', () => {
    const exePath = path.join(projectRoot, 'WorldMap.exe');
    expect(fs.existsSync(exePath)).toBe(true);

    const buffer = fs.readFileSync(exePath);
    // Must start with DOS MZ header 'MZ'
    expect(buffer[0]).toBe(0x4D); // 'M'
    expect(buffer[1]).toBe(0x5A); // 'Z'

    // Verify PE signature offset at 0x3c
    const peOffset = buffer.readUInt32LE(0x3c);
    expect(buffer[peOffset]).toBe(0x50);     // 'P'
    expect(buffer[peOffset + 1]).toBe(0x45); // 'E'
    expect(buffer[peOffset + 2]).toBe(0);
    expect(buffer[peOffset + 3]).toBe(0);

    // Verify machine type is x86-64 (0x8664)
    const machine = buffer.readUInt16LE(peOffset + 4);
    expect(machine).toBe(0x8664);

    // Verify subsystem is GUI (2)
    const subsystem = buffer.readUInt16LE(peOffset + 24 + 68);
    expect(subsystem).toBe(2); // IMAGE_SUBSYSTEM_WINDOWS_GUI
  });

  it('should have an executable Linux launcher script (run.sh)', () => {
    const shPath = path.join(projectRoot, 'run.sh');
    expect(fs.existsSync(shPath)).toBe(true);
    const content = fs.readFileSync(shPath, 'utf-8');
    expect(content).toContain('#!/usr/bin/env bash');
    expect(content).toContain('--app=');
    expect(content).toContain('127.0.0.1');

    // Must be executable
    const stat = fs.statSync(shPath);
    expect((stat.mode & 0o111) !== 0).toBe(true);
  });

  it('should have Windows PowerShell launcher (launch.ps1) with zero-install fallback', () => {
    const psPath = path.join(projectRoot, 'launch.ps1');
    expect(fs.existsSync(psPath)).toBe(true);
    const content = fs.readFileSync(psPath, 'utf-8');
    expect(content).toContain('--app=');
    expect(content).toContain('HttpListener');
  });

  it('should have Windows Batch launcher (WorldMap.bat)', () => {
    const batPath = path.join(projectRoot, 'WorldMap.bat');
    expect(fs.existsSync(batPath)).toBe(true);
  });

  it('should have zero-dependency local Node server (scripts/server.cjs)', () => {
    const serverPath = path.join(projectRoot, 'scripts/server.cjs');
    expect(fs.existsSync(serverPath)).toBe(true);
    const content = fs.readFileSync(serverPath, 'utf-8');
    expect(content).toContain("const HOST = '127.0.0.1';");
  });

  it('should have a 100% self-contained standalone single-file HTML (world_map.html)', () => {
    const singlePath = path.join(projectRoot, 'world_map.html');
    expect(fs.existsSync(singlePath)).toBe(true);
    const content = fs.readFileSync(singlePath, 'utf-8');

    // Must contain inlined styles and inlined script
    expect(content).toContain('<style>');
    expect(content).toContain('<script type="module">');

    // Must NOT contain external asset links
    expect(content).not.toMatch(/<link[^>]+rel=["']stylesheet["'][^>]+href=["'][^"']+\.css["']/i);
    expect(content).not.toMatch(/<script[^>]+src=["'][^"']+\.js["']/i);

    // File size should be > 1 MB (contains bundled Natural Earth 50m vector geometries + 197 country dossiers)
    const stat = fs.statSync(singlePath);
    expect(stat.size).toBeGreaterThan(1000000);
  });

  it('should have a dedicated mobile single-file HTML (world_map_mobile.html)', () => {
    const mobilePath = path.join(projectRoot, 'world_map_mobile.html');
    expect(fs.existsSync(mobilePath)).toBe(true);
    const content = fs.readFileSync(mobilePath, 'utf-8');

    // Must contain mobile viewport and touch styles
    expect(content).toContain('viewport-fit=cover');
    expect(content).toContain('overscroll-behavior: none');
    expect(content).toContain('<style>');
    expect(content).toContain('<script type="module">');

    // Must NOT contain external asset links
    expect(content).not.toMatch(/<link[^>]+rel=["']stylesheet["'][^>]+href=["'][^"']+\.css["']/i);
    expect(content).not.toMatch(/<script[^>]+src=["'][^"']+\.js["']/i);

    const stat = fs.statSync(mobilePath);
    expect(stat.size).toBeGreaterThan(1000000);
  });
});
