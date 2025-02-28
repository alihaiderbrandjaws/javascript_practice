// The switch statement is used to execute different blocks of code based on different conditions. 
// It is often used as an alternative to multiple
//  if-else statements when dealing with multiple possible values of a variable. //


var day = 8;

switch (
  day // switch case operator //
) {
  case 1:
    document.write(" today is monday ");
    break;

  case 2:
    document.write(" today is tuesday ");
    break;

  case 3:
    document.write(" today is mwednesday ");
    break;

  case 4:
    document.write(" today is thursday ");
    break;

  case 5:
    document.write(" today is friday ");
    break;

  case 6:
    document.write(" today is seturday ");
    break;

  case 7:
    document.write(" today is sunday ");
    break;
  default:
    document.write(" there is no weekend day ");
}
