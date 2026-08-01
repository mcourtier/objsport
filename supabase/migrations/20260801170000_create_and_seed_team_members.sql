-- Team members table + seed from content/team (public équipe page source).

CREATE TABLE IF NOT EXISTS public.team_members (
  id text PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  role text NOT NULL,
  photo text NOT NULL DEFAULT '',
  email text,
  phone text,
  region text NOT NULL DEFAULT '',
  station_id text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  excerpt text NOT NULL DEFAULT '',
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  biography text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read team_members" ON public.team_members;
CREATE POLICY "Public read team_members"
ON public.team_members
FOR SELECT
TO public
USING (true);

INSERT INTO public.team_members (
  id, name, slug, role, photo, email, phone, region, station_id,
  sort_order, excerpt, title, description, biography
)
VALUES
  ('member-pierre-vespignani', 'Pierre Vespignani', 'pierre-vespignani', 'Kinésithérapeute du sport — Fondateur, Objectif Sport', '/images/team/pierre-vespignani.jpg', 'contact@objsport.fr', NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 1, 'Formé à Nancy, il a accompagné des équipes professionnelles de football et de basket pendant plus de vingt ans avant de fonder Objectif Sport et la plateforme EZTM.', 'Pierre Vespignani — Objectif Sport', 'Kinésithérapeute du sport et fondateur d’Objectif Sport, Pierre accompagne clubs et sportifs en milieu de performance, de la prévention à la récupération.', 'Pierre Vespignani est **kinésithérapeute du sport**, formé à Nancy. Entreprenant et tourné vers le soin des sportifs, il a fondé et dirigé plusieurs stations Sport-Santé, puis **Objectif Sport** en 2016 et la plateforme collaborative **EZTM** en 2019 — pour centraliser l’information, digitaliser les outils de terrain et valoriser le travail des professionnels de la santé du sport.

Pendant plus de vingt ans, il a accompagné au quotidien des équipes de haut niveau : **AS Nancy Lorraine** (football professionnel), **SLUC Nancy Basket** (deux championnats de France Pro A), **Olympique de Marseille**, la **sélection du Sénégal** en qualification pour la Coupe du monde 2018, et l’**équipe de France féminine A** à la Fédération française de football. Il a aussi fondé **FKNL** (Formation Kiné Nancy Lorraine), centre de formation continue pour kinésithérapeutes.

Via Objectif Sport, il apporte un **renfort logistique et opérationnel** en milieu de performance — surcroît d’activité, compétitions exceptionnelles, manque d’effectifs, suivi de joueurs satellites ou besoin d’expertise — de la prévention à la récupération, du amateur au professionnel, pour les clubs, les compétitions et les sportifs. Curieux et exigeant, il mêle innovation et fondamentaux, dans un esprit de travail collaboratif et collectif.'),
  ('member-mathias-giustiniani', 'Mathias Giustiniani', 'mathias-giustiniani', 'Médecin du sport', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 2, 'Spécialisé en médecine du sport, il intervient auprès des clubs et des sportifs en milieu de performance.', 'Mathias Giustiniani — Objectif Sport', 'Médecin du sport au sein d’Objectif Sport, Mathias accompagne les sportifs dans le suivi médical et la prévention des blessures.', 'Mathias Giustiniani est **médecin du sport** chez Objectif Sport. Il assure le suivi médical des sportifs, de la prévention au retour à la compétition, en coordination avec l’ensemble de l’équipe pluridisciplinaire.'),
  ('member-barthelemy-frederique', 'Barthélémy Frédérique', 'barthelemy-frederique', 'Médecin du sport', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 3, 'Il intervient en prévention, diagnostic et prise en charge des pathologies liées à la pratique sportive.', 'Barthélémy Frédérique — Objectif Sport', 'Médecin du sport chez Objectif Sport, Barthélémy Frédérique accompagne les sportifs dans leur suivi médical et leur retour à l’effort.', 'Barthélémy Frédérique est **médecin du sport** au sein d’Objectif Sport. Il travaille en lien avec les kinésithérapeutes, ostéopathes et coachs pour un accompagnement complet des sportifs.'),
  ('member-yann-bourrel', 'Yann Bourrel', 'yann-bourrel', 'Ostéopathe', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 4, 'Il intervient en ostéopathie du sport, en complémentarité avec l’équipe médicale et paramédicale.', 'Yann Bourrel — Objectif Sport', 'Ostéopathe chez Objectif Sport, Yann Bourrel accompagne les sportifs dans la prévention et la prise en charge des troubles musculo-squelettiques.', 'Yann Bourrel est **ostéopathe** chez Objectif Sport. Il prend en charge les sportifs pour optimiser la mobilité, soulager les douleurs et prévenir les récidives, en coordination avec le reste de l’équipe.'),
  ('member-helene-pierrel', 'Hélène Pierrel', 'helene-pierrel', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 5, 'Elle intervient auprès des clubs et des sportifs individuels, du soin à la remise en forme.', 'Hélène Pierrel — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Hélène Pierrel accompagne les sportifs en rééducation, prévention et retour à la performance.', 'Hélène Pierrel est **kinésithérapeute** au sein d’Objectif Sport. Elle assure la prise en charge des sportifs en rééducation fonctionnelle et en prévention des blessures.'),
  ('member-stephane-re', 'Stéphane Ré', 'stephane-re', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 6, 'Il intervient en milieu sportif, en lien étroit avec les médecins et ostéopathes de l’équipe.', 'Stéphane Ré — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Stéphane Ré accompagne les sportifs en rééducation et en prévention des blessures.', 'Stéphane Ré est **kinésithérapeute** chez Objectif Sport. Il prend en charge les sportifs dans leur parcours de soin, de la rééducation au retour à l’entraînement.'),
  ('member-nathalie-faglia', 'Nathalie Faglia', 'nathalie-faglia', 'Ostéopathe', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 7, 'Elle intervient en ostéopathie du sport, en complémentarité avec l’équipe pluridisciplinaire.', 'Nathalie Faglia — Objectif Sport', 'Ostéopathe chez Objectif Sport, Nathalie Faglia accompagne les sportifs dans la prévention et le traitement des troubles fonctionnels.', 'Nathalie Faglia est **ostéopathe** au sein d’Objectif Sport. Elle accompagne les sportifs pour restaurer l’équilibre du corps et optimiser la récupération.'),
  ('member-maxime-matton', 'Maxime Matton', 'maxime-matton', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 8, 'Il intervient auprès des clubs et des sportifs en milieu de performance.', 'Maxime Matton — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Maxime Matton accompagne les sportifs en rééducation et en prévention.', 'Maxime Matton est **kinésithérapeute** chez Objectif Sport. Il assure la prise en charge des sportifs, de la prévention à la rééducation fonctionnelle.'),
  ('member-vladimir-duparc', 'Vladimir Duparc', 'vladimir-duparc', 'Coach APA', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 9, 'Il conçoit et anime des séances adaptées aux besoins et aux objectifs de chaque sportif.', 'Vladimir Duparc — Objectif Sport', 'Coach APA chez Objectif Sport, Vladimir Duparc accompagne les sportifs dans l’activité physique adaptée et la remise en forme.', 'Vladimir Duparc est **coach APA** (activité physique adaptée) au sein d’Objectif Sport. Il accompagne les sportifs dans la reprise ou le maintien de l’activité physique, en lien avec l’équipe soignante.'),
  ('member-amelie-raynal', 'Amélie Raynal', 'amelie-raynal', 'Coach APA', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 10, 'Elle propose des séances personnalisées, adaptées aux objectifs et au parcours de chaque sportif.', 'Amélie Raynal — Objectif Sport', 'Coach APA chez Objectif Sport, Amélie Raynal accompagne les sportifs dans l’activité physique adaptée et la performance.', 'Amélie Raynal est **coach APA** (activité physique adaptée) chez Objectif Sport. Elle accompagne les sportifs dans la reprise d’activité, le renforcement et l’optimisation de la performance.'),
  ('member-cecile-capdeville', 'Cécile Capdeville', 'cecile-capdeville', 'Nutritionniste', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 11, 'Elle conseille les sportifs sur la nutrition au service de la performance et de la récupération.', 'Cécile Capdeville — Objectif Sport', 'Nutritionniste chez Objectif Sport, Cécile Capdeville accompagne les sportifs dans l’optimisation de leur alimentation et de leur hydratation.', 'Cécile Capdeville est **nutritionniste** au sein d’Objectif Sport. Elle accompagne les sportifs pour adapter leur alimentation à leurs objectifs de performance, de récupération et de bien-être.'),
  ('member-lucas-bonnaud', 'Lucas Bonnaud', 'lucas-bonnaud', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 12, 'Il intervient en milieu sportif, en coordination avec l’équipe pluridisciplinaire.', 'Lucas Bonnaud — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Lucas Bonnaud accompagne les sportifs en rééducation et en prévention des blessures.', 'Lucas Bonnaud est **kinésithérapeute** chez Objectif Sport. Il prend en charge les sportifs dans leur parcours de soin et de retour à la performance.'),
  ('member-marielle-rollet', 'Marielle Rollet', 'marielle-rollet', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 13, 'Elle intervient auprès des clubs et des sportifs individuels en milieu de performance.', 'Marielle Rollet — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Marielle Rollet accompagne les sportifs en rééducation et en prévention.', 'Marielle Rollet est **kinésithérapeute** au sein d’Objectif Sport. Elle assure la prise en charge des sportifs, de la prévention à la rééducation fonctionnelle.'),
  ('member-albert-antonio', 'Albert Antonio', 'albert-antonio', 'Kinésithérapeute', '/images/athlete.png', NULL, NULL, 'Provence-Alpes-Côte d''Azur', 'clinique-les-trois-tours', 14, 'Il intervient en milieu sportif, en lien avec l’ensemble de l’équipe soignante.', 'Albert Antonio — Objectif Sport', 'Kinésithérapeute chez Objectif Sport, Albert Antonio accompagne les sportifs en rééducation et en prévention des blessures.', 'Albert Antonio est **kinésithérapeute** chez Objectif Sport. Il accompagne les sportifs dans leur parcours de soin, de la rééducation au retour à l’entraînement.')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  role = EXCLUDED.role,
  photo = EXCLUDED.photo,
  email = EXCLUDED.email,
  phone = EXCLUDED.phone,
  region = EXCLUDED.region,
  station_id = EXCLUDED.station_id,
  sort_order = EXCLUDED.sort_order,
  excerpt = EXCLUDED.excerpt,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  biography = EXCLUDED.biography,
  updated_at = now();
