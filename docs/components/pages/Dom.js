import React from 'react';
import { Namespace } from './Namespace';
import * as dom from '../../../src/dom';

export const Dom = () =>
  <Namespace name='dom' object={dom} />;
