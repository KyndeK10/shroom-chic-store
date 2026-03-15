<#
PowerShell image optimization script.
Requires ImageMagick (`magick`) installed or replace with your preferred tool.
Converts PNG/JPG in `assets/` to WebP and creates a small & medium resized variant.
#>
$assetsDir = Join-Path $PSScriptRoot "..\assets"
if (-not (Test-Path $assetsDir)) { Write-Error "assets directory not found: $assetsDir"; exit 1 }

Get-ChildItem -Path $assetsDir -Include *.png,*.jpg,*.jpeg -Recurse | ForEach-Object {
    $src = $_.FullName
    $rel = $_.FullName.Substring($assetsDir.Length+1).Replace('\','/')
    $webp = Join-Path $_.DirectoryName ($_.BaseName + '.webp')
    Write-Output "Optimizing: $rel -> $([IO.Path]::GetFileName($webp))"
    & magick convert $src -quality 80 -strip $webp

    # Create responsive sizes
    $small = Join-Path $_.DirectoryName ($_.BaseName + '-sm.webp')
    $med = Join-Path $_.DirectoryName ($_.BaseName + '-md.webp')
    & magick convert $src -resize 400x -quality 70 -strip $small
    & magick convert $src -resize 800x -quality 75 -strip $med
}

Write-Output "Done. Upload generated .webp and -sm/-md variants to your theme assets."
