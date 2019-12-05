# ecommerce
project (ecommerce checkout)
PART 1:  Develop the User Interface   (5 marks)

PART 2:  Calculating Extended Prices  		(7 marks)

Clicking on the r+ / - buttons should increase/decrease the respective quantity & calculate the respective extended Price for pants and shirt, as show in the below diagram shown. All amounts need to be rounded to 2 decimal points.



You cannot have negative quantities in the shopping cart. Thus, if the quantity is zero on any of the two items and the user hits the - button, the quantity should not decrease further.

Extended Price is Quantity X Extended Price


PART 3:  Calculating the SubTotal/Tax and Final Total of your shopping cart 							(10 marks)

When user presses the CALCULATE button,  the web application should calculate subtotal (Add two extended price together), tax (13% of the sub total), and total (sub total + tax)l.  
These amounts must be output to the user interface, as shown in the diagram below.
All amounts should be rounded to 2 decimal points.






PART 4:  Adding Coupons 						 (8 marks)

When the user presses the Click to Enter button,  the web application should prompt the user to enter a coupon code from the below codes:

Code Effect
NOTAX
Customer does not need to pay tax
FIFTYFIFTY
Customer gets 50% off their subtotal




Once the user enters a valid code, the calculated discount value should be deducted from final total and should be updated on the page


