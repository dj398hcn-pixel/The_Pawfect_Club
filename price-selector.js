/* Price selector for Cat Grooming (matches the tables in services.html) */
function calculatePrice() {
  var coat = document.getElementById("coatType").value;     // 0 kitten, 1 short, 2 long
  var tier = document.getElementById("groomTier").value;    // 0 to 4
  var days = parseInt(document.getElementById("daycareDays").value);
  var addons = document.getElementsByName("addon");
  var result = document.getElementById("priceResult");

  // prices in the same order as the tables. 0 = N/A
  var tierNames = ["Waterless Refresh", "Basic Hygiene Groom", "Full Styling & Coat Care",
                   "Lion Cut / Teddy Trim", "Degrease Groom"];
  var tierPrices = [[35, 45, 65],
                    [45, 60, 90],
                    [60, 85, 135],
                    [0, 95, 150],
                    [0, 110, 180]];

  var addonNames = ["Micro-Bubble Spa", "Mud Mask", "Medicated Anti-Fungal",
                    "Anti-Flea & Ear Mite Treatment", "Partial Degrease"];
  var addonPrices = [[30, 40, 50],
                     [30, 40, 50],
                     [35, 45, 55],
                     [35, 45, 55],
                     [0, 25, 35]];

  var total = 0;
  var lines = "";
  var i;

  if (coat == "" || tier == "") {
    result.innerHTML = "Please choose your cat's coat type and a grooming package.";
    return;
  }
  if (isNaN(days) || days < 0) {
    result.innerHTML = "Daycare days must be 0 or more.";
    return;
  }

  // main grooming package
  var price = tierPrices[tier][coat];
  if (price == 0) {
    result.innerHTML = tierNames[tier] + " is not available for this coat type.";
    return;
  }
  total = total + price;
  lines += tierNames[tier] + ": RM " + price + "<br>";

  // add-ons (checkboxes)
  for (i = 0; i < addons.length; i++) {
    if (addons[i].checked) {
      var addonPrice = addonPrices[i][coat];
      if (addonPrice == 0) {
        result.innerHTML = addonNames[i] + " is not available for this coat type.";
        return;
      }
      total = total + addonPrice;
      lines += addonNames[i] + ": RM " + addonPrice + "<br>";
    }
  }

  // daycare: RM 22 per day
  if (days > 0) {
    total = total + days * 22;
    lines += "Daycare (" + days + " day x RM 22): RM " + (days * 22) + "<br>";
  }

  result.innerHTML = lines + "<b>Total: RM " + total + "</b>";
}
