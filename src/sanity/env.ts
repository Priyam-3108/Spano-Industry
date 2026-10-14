export const apiVersion =
  (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01').trim();

export const dataset = assertValue(
  (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim(),
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').trim();

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'your_sanity_project_id_here' && projectId.length > 0
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
