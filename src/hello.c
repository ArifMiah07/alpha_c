//include/hello.c

#include <stdio.h>
#include "hello.h"


void hello(float r)
{
  printf("Sata Andagi! \n");
  float area = area_of_circle(r);
  printf("area of circle : %f \n", area);
}

float area_of_circle( float radius ){
  return (PI * radius * radius);
}