import React from 'react';
import { Index } from '../pages/Index';
import { Detail } from '../pages/Detail';

interface RoutesType {
  key: string;
  path: string;
  component: React.ComponentType;
}
interface RedirectRoutesType {
  key: string;
  path: string;
  to: string;
}

export const routes: RoutesType[] = [
  {
    key: 'home',
    path: '/home',
    component: Index,
  },
  {
    key: 'detail',
    path: '/detail/:id',
    component: Detail,
  },
];

export const redirectRoutes: RedirectRoutesType[] = [
  {
    key: '/',
    path: '/',
    to: '/home',
  },
];
