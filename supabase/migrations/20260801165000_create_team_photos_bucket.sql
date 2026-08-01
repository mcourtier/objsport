-- Public bucket for team member portraits.
-- Writes go through the Nuxt server (service role); public may only read.

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'team-photos',
  'team-photos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public read team-photos" ON storage.objects;
CREATE POLICY "Public read team-photos"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'team-photos');
