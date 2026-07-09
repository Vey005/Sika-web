Set-StrictMode -Version Latest
Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\src\assets\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function ColorFromHex($hex) {
  return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function New-Brush($hex) {
  return [System.Drawing.SolidBrush]::new((ColorFromHex $hex))
}

function New-Pen($hex, $width = 1) {
  return [System.Drawing.Pen]::new((ColorFromHex $hex), $width)
}

function New-Font($size, $style = "Regular") {
  return [System.Drawing.Font]::new("Segoe UI", $size, [System.Drawing.FontStyle]::$style)
}

function Draw-RoundRect($g, $x, $y, $w, $h, $r, $fill, $stroke = $null, $strokeWidth = 1) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  $brush = New-Brush $fill
  $g.FillPath($brush, $path)
  $brush.Dispose()
  if ($stroke) {
    $pen = New-Pen $stroke $strokeWidth
    $g.DrawPath($pen, $path)
    $pen.Dispose()
  }
  $path.Dispose()
}

function Draw-Text($g, $text, $x, $y, $size, $color, $style = "Regular") {
  $font = New-Font $size $style
  $brush = New-Brush $color
  $g.DrawString($text, $font, $brush, [float]$x, [float]$y)
  $font.Dispose()
  $brush.Dispose()
}

function Draw-CenteredText($g, $text, $rect, $size, $color, $style = "Regular") {
  $font = New-Font $size $style
  $brush = New-Brush $color
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $g.DrawString($text, $font, $brush, $rect, $format)
  $font.Dispose()
  $brush.Dispose()
  $format.Dispose()
}

function Draw-Shadow($g, $x, $y, $w, $h, $r) {
  for ($i = 8; $i -ge 1; $i--) {
    $alpha = [Math]::Max(8, 36 - ($i * 3))
    $color = [System.Drawing.Color]::FromArgb($alpha, 17, 24, 39)
    $brush = [System.Drawing.SolidBrush]::new($color)
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = ($r + $i) * 2
    $xx = $x - $i
    $yy = $y + ($i * 2)
    $ww = $w + ($i * 2)
    $hh = $h + ($i * 2)
    $path.AddArc($xx, $yy, $d, $d, 180, 90)
    $path.AddArc($xx + $ww - $d, $yy, $d, $d, 270, 90)
    $path.AddArc($xx + $ww - $d, $yy + $hh - $d, $d, $d, 0, 90)
    $path.AddArc($xx, $yy + $hh - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    $g.FillPath($brush, $path)
    $path.Dispose()
    $brush.Dispose()
  }
}

function New-Canvas($path, $bg = "#FFF9EF") {
  $bmp = [System.Drawing.Bitmap]::new(1600, 1000)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear((ColorFromHex $bg))
  return @{ Bitmap = $bmp; Graphics = $g; Path = $path }
}

function Save-Canvas($canvas) {
  $canvas.Graphics.Dispose()
  $canvas.Bitmap.Save($canvas.Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Bitmap.Dispose()
}

function Draw-TopBar($g, $title, $subtitle) {
  Draw-RoundRect $g 90 70 1420 90 28 "#FFFFFF" "#E5E7EB" 2
  Draw-RoundRect $g 120 93 44 44 22 "#B8860B"
  Draw-CenteredText $g "S" ([System.Drawing.RectangleF]::new(120, 91, 44, 44)) 21 "#FFFFFF" "Bold"
  Draw-Text $g $title 185 86 24 "#111827" "Bold"
  Draw-Text $g $subtitle 185 120 15 "#6B7280"
  Draw-RoundRect $g 1245 94 120 42 21 "#EAFBF1"
  Draw-CenteredText $g "ONLINE" ([System.Drawing.RectangleF]::new(1245, 92, 120, 42)) 13 "#16A34A" "Bold"
  Draw-RoundRect $g 1385 94 92 42 21 "#FFF3D6"
  Draw-CenteredText $g "GH₵" ([System.Drawing.RectangleF]::new(1385, 92, 92, 42)) 15 "#8A6500" "Bold"
}

function Draw-ProductGrid($g, $x, $y) {
  $products = @(
    @("Jasmine Rice", "GH₵84.00", "#FFF3D6"),
    @("Soap Pack", "GH₵42.50", "#EAFBF1"),
    @("Cooking Oil", "GH₵92.00", "#FEF2F2"),
    @("Milk Tin", "GH₵16.00", "#F8FAFC"),
    @("Sugar 2kg", "GH₵31.00", "#FFF3D6"),
    @("Noodles", "GH₵8.50", "#EAFBF1")
  )
  $i = 0
  foreach ($p in $products) {
    $col = $i % 3
    $row = [Math]::Floor($i / 3)
    $px = $x + ($col * 250)
    $py = $y + ($row * 210)
    Draw-RoundRect $g $px $py 220 175 22 "#FFFFFF" "#E5E7EB" 2
    Draw-RoundRect $g ($px + 18) ($py + 18) 184 72 18 $p[2]
    Draw-Text $g $p[0] ($px + 20) ($py + 108) 18 "#111827" "Bold"
    Draw-Text $g $p[1] ($px + 20) ($py + 138) 15 "#8A6500" "Bold"
    $i++
  }
}

function Draw-CartPanel($g, $x, $y, $offline = $false) {
  Draw-RoundRect $g $x $y 430 650 28 "#FFFFFF" "#E5E7EB" 2
  Draw-Text $g "Current Cart" ($x + 32) ($y + 28) 26 "#111827" "Bold"
  Draw-Text $g "Cashier: Ama Mensah" ($x + 32) ($y + 66) 15 "#6B7280"
  $rows = @(
    @("Jasmine Rice 5kg", "1", "84.00"),
    @("Soap Pack", "2", "85.00"),
    @("Cooking Oil", "1", "92.00"),
    @("Noodles", "6", "51.00")
  )
  $ry = $y + 125
  foreach ($r in $rows) {
    Draw-RoundRect $g ($x + 28) $ry 374 70 16 "#FAFAF8" "#E5E7EB" 1
    Draw-Text $g $r[0] ($x + 48) ($ry + 14) 16 "#111827" "Bold"
    Draw-Text $g ("Qty " + $r[1]) ($x + 48) ($ry + 41) 13 "#6B7280"
    Draw-Text $g ("GH₵ " + $r[2]) ($x + 285) ($ry + 23) 15 "#111827" "Bold"
    $ry += 84
  }
  Draw-RoundRect $g ($x + 28) ($y + 490) 374 44 18 "#FFF3D6"
  Draw-Text $g "Tax ready: VAT, NHIL, GETFund" ($x + 54) ($y + 501) 15 "#8A6500" "Bold"
  Draw-Text $g "Total" ($x + 32) ($y + 558) 19 "#6B7280" "Bold"
  Draw-Text $g "GH₵ 312.00" ($x + 200) ($y + 550) 30 "#111827" "Bold"
  Draw-RoundRect $g ($x + 28) ($y + 600) 374 64 28 "#B8860B"
  Draw-CenteredText $g "CHARGE CUSTOMER" ([System.Drawing.RectangleF]::new(($x + 28), ($y + 598), 374, 64)) 18 "#FFFFFF" "Bold"
  if ($offline) {
    Draw-RoundRect $g ($x + 230) ($y + 28) 150 34 17 "#FFF3D6"
    Draw-CenteredText $g "OFFLINE READY" ([System.Drawing.RectangleF]::new(($x + 230), ($y + 26), 150, 34)) 12 "#8A6500" "Bold"
  }
}

function Create-HeroImage {
  $canvas = New-Canvas (Join-Path $outDir "hero-pos.png")
  $g = $canvas.Graphics
  Draw-TopBar $g "Sika POS Checkout" "Fast local sales, stock checks, MoMo payments"
  Draw-Shadow $g 90 190 1420 720 36
  Draw-RoundRect $g 90 190 1420 720 36 "#FFFFFF" "#E5E7EB" 2
  Draw-RoundRect $g 125 230 820 58 22 "#FAFAF8" "#E5E7EB" 1
  Draw-Text $g "Search product, barcode, receipt..." 155 246 18 "#6B7280"
  Draw-RoundRect $g 790 240 120 38 19 "#EAFBF1"
  Draw-CenteredText $g "IN STOCK" ([System.Drawing.RectangleF]::new(790, 238, 120, 38)) 13 "#16A34A" "Bold"
  Draw-ProductGrid $g 125 330
  Draw-CartPanel $g 1025 230 $false
  Draw-RoundRect $g 125 780 230 62 18 "#111827"
  Draw-CenteredText $g "Print Receipt" ([System.Drawing.RectangleF]::new(125, 778, 230, 62)) 17 "#FFFFFF" "Bold"
  Draw-RoundRect $g 375 780 230 62 18 "#FFF3D6" "#E5E7EB" 1
  Draw-CenteredText $g "Hold Sale" ([System.Drawing.RectangleF]::new(375, 778, 230, 62)) 17 "#8A6500" "Bold"
  Save-Canvas $canvas
}

function Create-CheckoutImage {
  $canvas = New-Canvas (Join-Path $outDir "checkout-screen.png") "#FAFAF8"
  $g = $canvas.Graphics
  Draw-TopBar $g "Offline Checkout Mode" "Continue selling during unstable internet"
  Draw-RoundRect $g 95 190 1410 95 28 "#111827"
  Draw-Text $g "Internet unavailable. Local checkout is active." 140 216 28 "#FFFFFF" "Bold"
  Draw-RoundRect $g 1110 219 250 40 20 "#FFF3D6"
  Draw-CenteredText $g "Sync when online" ([System.Drawing.RectangleF]::new(1110, 217, 250, 40)) 15 "#8A6500" "Bold"
  Draw-RoundRect $g 105 330 860 520 28 "#FFFFFF" "#E5E7EB" 2
  Draw-Text $g "Product search" 145 365 24 "#111827" "Bold"
  Draw-RoundRect $g 145 420 760 68 18 "#FAFAF8" "#E5E7EB" 2
  Draw-Text $g "Scan barcode or type product name" 178 440 20 "#6B7280"
  Draw-ProductGrid $g 145 525
  Draw-CartPanel $g 1030 330 $true
  Save-Canvas $canvas
}

function Create-PaymentImage {
  $canvas = New-Canvas (Join-Path $outDir "pos-payment.png") "#FFF9EF"
  $g = $canvas.Graphics
  Draw-TopBar $g "Sika POS Payment" "Cash, MoMo, split payments, store credit"
  Draw-RoundRect $g 120 210 710 660 34 "#FFFFFF" "#E5E7EB" 2
  Draw-Text $g "Collect payment" 165 255 34 "#111827" "Bold"
  Draw-Text $g "Total due" 165 315 17 "#6B7280" "Bold"
  Draw-Text $g "GH₵ 312.00" 165 345 54 "#111827" "Bold"
  $methods = @(
    @("Cash", "Instant counter payment", "#FFF3D6"),
    @("MTN MoMo", "Reference and phone support", "#EAFBF1"),
    @("Telecel Cash", "Mobile money friendly", "#F8FAFC"),
    @("AirtelTigo Money", "Fast settlement record", "#FEF2F2"),
    @("Store Credit", "Add to customer debt", "#FFF3D6"),
    @("Split Payment", "Mix cash, MoMo, credit", "#EAFBF1")
  )
  $i = 0
  foreach ($m in $methods) {
    $col = $i % 2
    $row = [Math]::Floor($i / 2)
    $x = 165 + ($col * 315)
    $y = 455 + ($row * 115)
    Draw-RoundRect $g $x $y 285 88 20 $m[2] "#E5E7EB" 1
    Draw-Text $g $m[0] ($x + 22) ($y + 18) 18 "#111827" "Bold"
    Draw-Text $g $m[1] ($x + 22) ($y + 49) 13 "#4B5563"
    $i++
  }
  Draw-RoundRect $g 940 210 540 660 34 "#111827"
  Draw-Text $g "Receipt preview" 990 258 28 "#FFFFFF" "Bold"
  Draw-Text $g "Sika POS / DanniTech Solutions" 990 305 16 "#FFFFFF"
  $receiptY = 365
  foreach ($line in @("Rice 5kg                 84.00", "Soap Pack x2             85.00", "Cooking Oil              92.00", "Noodles x6               51.00")) {
    Draw-Text $g $line 990 $receiptY 18 "#E5E7EB"
    $receiptY += 42
  }
  Draw-RoundRect $g 990 565 430 2 1 "#374151"
  Draw-Text $g "TOTAL              GH₵ 312.00" 990 605 22 "#FFFFFF" "Bold"
  Draw-RoundRect $g 990 700 430 70 30 "#B8860B"
  Draw-CenteredText $g "PRINT AND COMPLETE SALE" ([System.Drawing.RectangleF]::new(990, 698, 430, 70)) 18 "#FFFFFF" "Bold"
  Save-Canvas $canvas
}

function Create-InventoryImage {
  $canvas = New-Canvas (Join-Path $outDir "inventory-dashboard.png") "#FAFAF8"
  $g = $canvas.Graphics
  Draw-TopBar $g "Inventory Dashboard" "Stock levels, suppliers, restock history"
  $cards = @(
    @("In Stock", "1,532", "#EAFBF1", "#16A34A"),
    @("Low Stock", "254", "#FEF2F2", "#EF4444"),
    @("Out of Stock", "70", "#FFF3D6", "#8A6500"),
    @("Suppliers", "38", "#F8FAFC", "#2563EB")
  )
  $i = 0
  foreach ($c in $cards) {
    $x = 100 + ($i * 360)
    Draw-RoundRect $g $x 210 320 155 26 "#FFFFFF" "#E5E7EB" 2
    Draw-RoundRect $g ($x + 24) 236 80 42 21 $c[2]
    Draw-CenteredText $g $c[0] ([System.Drawing.RectangleF]::new(($x + 24), 234, 80, 42)) 12 $c[3] "Bold"
    Draw-Text $g $c[1] ($x + 24) 296 40 "#111827" "Bold"
    $i++
  }
  Draw-RoundRect $g 100 420 850 450 28 "#FFFFFF" "#E5E7EB" 2
  Draw-Text $g "Product movement" 140 458 27 "#111827" "Bold"
  $barX = 150
  foreach ($height in @(150, 220, 180, 260, 205, 310, 240)) {
    Draw-RoundRect $g $barX (790 - $height) 70 $height 18 "#FFF3D6"
    Draw-RoundRect $g $barX (790 - ($height * 0.62)) 70 ($height * 0.62) 18 "#B8860B"
    $barX += 105
  }
  Draw-RoundRect $g 1010 420 490 450 28 "#FFFFFF" "#E5E7EB" 2
  Draw-Text $g "Low stock watchlist" 1050 458 27 "#111827" "Bold"
  $y = 525
  foreach ($row in @(@("Milk Tin", "12 left"), @("Sugar 2kg", "8 left"), @("Tomato Paste", "5 left"), @("Soap Pack", "3 left"))) {
    Draw-RoundRect $g 1050 $y 410 70 18 "#FAFAF8" "#E5E7EB" 1
    Draw-Text $g $row[0] 1080 ($y + 16) 17 "#111827" "Bold"
    Draw-RoundRect $g 1325 ($y + 18) 105 34 17 "#FEF2F2"
    Draw-CenteredText $g $row[1] ([System.Drawing.RectangleF]::new(1325, ($y + 16), 105, 34)) 12 "#EF4444" "Bold"
    $y += 85
  }
  Save-Canvas $canvas
}

function Create-CashierCounterImage {
  $canvas = New-Canvas (Join-Path $outDir "cashier-counter.png") "#FFF9EF"
  $g = $canvas.Graphics
  $skyBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(0, 0, 1600, 1000),
    (ColorFromHex "#FFF9EF"),
    (ColorFromHex "#FAFAF8"),
    90
  )
  $g.FillRectangle($skyBrush, 0, 0, 1600, 1000)
  $skyBrush.Dispose()
  Draw-RoundRect $g 95 105 1410 240 32 "#FFFFFF" "#E5E7EB" 2
  for ($i = 0; $i -lt 7; $i++) {
    $x = 145 + ($i * 190)
    Draw-RoundRect $g $x 155 130 140 20 "#FFF3D6" "#E5E7EB" 1
    Draw-RoundRect $g ($x + 28) 185 72 64 12 "#FFFFFF" "#E5E7EB" 1
  }
  Draw-RoundRect $g 130 680 1340 190 36 "#8A6500"
  Draw-RoundRect $g 160 705 1280 110 28 "#B8860B"
  Draw-Shadow $g 500 330 520 345 32
  Draw-RoundRect $g 500 330 520 345 32 "#111827"
  Draw-RoundRect $g 535 365 450 245 18 "#FFFFFF"
  Draw-Text $g "Sika POS" 575 398 30 "#111827" "Bold"
  Draw-RoundRect $g 575 465 170 72 18 "#FFF3D6"
  Draw-CenteredText $g "GH₵ 312.00" ([System.Drawing.RectangleF]::new(575, 463, 170, 72)) 20 "#8A6500" "Bold"
  Draw-RoundRect $g 770 465 170 72 18 "#EAFBF1"
  Draw-CenteredText $g "IN STOCK" ([System.Drawing.RectangleF]::new(770, 463, 170, 72)) 17 "#16A34A" "Bold"
  Draw-RoundRect $g 668 675 185 34 12 "#374151"
  Draw-RoundRect $g 620 710 285 50 18 "#111827"
  Draw-Shadow $g 1070 510 240 175 22
  Draw-RoundRect $g 1070 510 240 175 22 "#FFFFFF" "#E5E7EB" 2
  Draw-RoundRect $g 1105 542 170 64 12 "#FAFAF8" "#E5E7EB" 1
  Draw-Text $g "Receipt" 1115 555 17 "#111827" "Bold"
  Draw-RoundRect $g 1120 665 140 35 10 "#FFFFFF"
  Draw-RoundRect $g 255 560 235 78 22 "#111827"
  Draw-RoundRect $g 280 586 185 18 9 "#374151"
  Draw-RoundRect $g 286 615 174 18 9 "#B8860B"
  Draw-Text $g "Scanner ready" 250 655 20 "#111827" "Bold"
  Save-Canvas $canvas
}

Create-HeroImage
Create-CheckoutImage
Create-PaymentImage
Create-InventoryImage
Create-CashierCounterImage

Write-Host "Generated Sika POS mockup images in $outDir"
