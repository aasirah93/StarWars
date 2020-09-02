import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Pagination from './pagination'

afterEach(cleanup);
 
it('should be enabled', () => {
    expect(button).not.toBeDisabled()
  });
