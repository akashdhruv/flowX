"""Tests for `mae6225/grid.py`."""

import numpy
import random
import unittest

import mae6225


class TestCG(unittest.TestCase):
    def setUp(self):
        self.num = 3
        self.nx, self.ny = 10, 20
        self.xmin, self.xmax = 0.0, 1.0
        self.ymin, self.ymax = -0.5, 0.5
        self.grid = mae6225.Grid(self.num,
                                 self.nx, self.ny,
                                 self.xmin, self.xmax,
                                 self.ymin, self.ymax)

    def test_init(self):
        names = ['num', 'nx', 'ny', 'xmin', 'xmax', 'ymin', 'ymax']
        for name in names:
            self.assertEqual(getattr(self.grid, name), getattr(self, name))
        size = self.num * (self.nx + 2) * (self. ny + 2)
        self.assertEqual(self.grid.data.size, size)

    def test_set_get_values(self):
        ivar = self.num - 1
        values = numpy.ones((self.nx + 2, self.ny + 2))
        self.grid.set_values(ivar, values)
        values2 = self.grid.get_values(ivar)
        self.assertTrue(numpy.allclose(values, values2, atol=1e-12))

    def test_set_get_value(self):
        ivar = self.num - 1
        value = 0.123456
        i, j = random.randint(0, self.nx + 2), random.randint(0, self.ny + 2)
        self.grid.set_value(ivar, i, j, value)
        value2 = self.grid.get_value(ivar, i, j)
        self.assertEqual(value, value2)

    def test_get_cell_centered_coordinates(self):
        x, y = self.grid.get_cell_centered_coordinates()
        dx = (self.xmax - self.xmin) / self.nx
        dy = (self.ymax - self.ymin) / self.ny
        x_test = numpy.linspace(self.xmin - dx / 2, self.xmax + dx / 2,
                                num=self.nx + 2)
        self.assertTrue(numpy.allclose(x, x_test, atol=1e-8))
        y_test = numpy.linspace(self.ymin - dy / 2, self.ymax + dy / 2,
                                num=self.ny + 2)
        self.assertTrue(numpy.allclose(y, y_test, atol=1e-8))


if __name__ == '__main__':
    unittest.main()