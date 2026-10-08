'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export function StudioClient() {
  return (
    <div className="min-h-screen">
      <NextStudio config={config} />
    </div>
  );
}
