#include <stdio.h>



#define PI 3.1416

float area_of_circle( float radius );

int main()
{
  printf("Sata Andagi! \n");
  float area = area_of_circle(21);
  printf("area of circle : %f \n", area);
  return 0;
}

float area_of_circle( float radius ){
  return (PI * radius * radius);
}