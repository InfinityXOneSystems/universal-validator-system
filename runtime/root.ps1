# SAFE ROOT RESOLUTION
if ($PSScriptRoot -and $PSScriptRoot -ne '') {
    $ROOT = $PSScriptRoot
} else {
    $ROOT = Get-Location
}
