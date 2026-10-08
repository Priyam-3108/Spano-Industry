import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const studioBasePath = rawBasePath ? `${rawBasePath.replace(/\/+$/, '')}/studio` : '/studio';

export default defineConfig({
  basePath: studioBasePath,
  name: 'spano-industry-studio',
  title: 'SPANO Industry Editorial Studio',
  projectId: projectId || 'demo-project-id',
  dataset: dataset || 'production',
  schema,
  plugins: [structureTool()],
});
