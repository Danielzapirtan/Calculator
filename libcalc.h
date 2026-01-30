#ifndef LIBCALC
#define LIBCALC

#include <stdio.h>
#include <stdlib.h>

typedef double NUMBER;
#define FORMAT "%.6lf"

extern NUMBER add(NUMBER x, NUMBER y);
extern NUMBER sub(NUMBER x, NUMBER y);
extern NUMBER mul(NUMBER x, NUMBER y);
extern NUMBER dvd(NUMBER x, NUMBER y);

extern NUMBER sqrt(NUMBER);

#endif
