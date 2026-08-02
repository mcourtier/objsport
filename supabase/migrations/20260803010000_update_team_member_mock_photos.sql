-- Assign unique gender-consistent mock profile photos for all members except Pierre Vespignani.

UPDATE public.team_members SET photo = CASE id
  WHEN 'member-mathias-giustiniani' THEN '/images/team/mathias-giustiniani.jpg'
  WHEN 'member-barthelemy-frederique' THEN '/images/team/barthelemy-frederique.jpg'
  WHEN 'member-yann-bourrel' THEN '/images/team/yann-bourrel.jpg'
  WHEN 'member-helene-pierrel' THEN '/images/team/helene-pierrel.jpg'
  WHEN 'member-stephane-re' THEN '/images/team/stephane-re.jpg'
  WHEN 'member-nathalie-faglia' THEN '/images/team/nathalie-faglia.jpg'
  WHEN 'member-maxime-matton' THEN '/images/team/maxime-matton.jpg'
  WHEN 'member-vladimir-duparc' THEN '/images/team/vladimir-duparc.jpg'
  WHEN 'member-amelie-raynal' THEN '/images/team/amelie-raynal.jpg'
  WHEN 'member-cecile-capdeville' THEN '/images/team/cecile-capdeville.jpg'
  WHEN 'member-lucas-bonnaud' THEN '/images/team/lucas-bonnaud.jpg'
  WHEN 'member-marielle-rollet' THEN '/images/team/marielle-rollet.jpg'
  WHEN 'member-albert-antonio' THEN '/images/team/albert-antonio.jpg'
  ELSE photo
END,
updated_at = now()
WHERE id <> 'member-pierre-vespignani';
