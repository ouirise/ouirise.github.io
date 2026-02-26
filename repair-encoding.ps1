# Repair encoding script
$files = @(
    "portal/index.html",
    "fragments/portal-desktop.html"
)

foreach ($file in $files) {
    $path = Join-Path "c:\Users\muham\OneDrive\Documents\GitHub\ouirise.github.io" $file
    if (Test-Path $path) {
        # Read as bytes to preserve encoding
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $content = [System.Text.Encoding]::UTF8.GetString($bytes)
        
        # Replace corrupted sequences
        $content = $content -replace 'Σ┐èΦ╛╛', '俊达'
        $content = $content -replace 'dYO��,?dYO''', '🌫️🌒'
        
        # Write back as UTF-8 with BOM for safety
        [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Repaired: $file"
    }
}
