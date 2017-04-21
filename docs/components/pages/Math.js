import React from 'react';
import { Namespace } from './Namespace';
import * as math from '../../../src/math';

export const Math = () =>
  <Namespace name='math' object={math} />;
