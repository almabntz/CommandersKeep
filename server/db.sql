--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_6
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    firstname text,
    lastname text,
    email text,
    sub text
);


ALTER TABLE public.users OWNER TO tpl522_6;

--
-- Name: reg_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_6
--

ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reg_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_collection; Type: TABLE; Schema: public; Owner: tpl522_6
--

CREATE TABLE public.user_collection (
    name text,
    manacost text,
    originaltext text,
    cmc text,
    imageurl text,
    card_id text,
    id integer NOT NULL,
    user_id integer
);


ALTER TABLE public.user_collection OWNER TO tpl522_6;

--
-- Name: user_collection_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_6
--

ALTER TABLE public.user_collection ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_collection_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_deck; Type: TABLE; Schema: public; Owner: tpl522_6
--

CREATE TABLE public.user_deck (
    name text,
    manacost text,
    originaltext text,
    cmc text,
    imageurl text,
    id integer NOT NULL,
    card_id text,
    user_id integer
);


ALTER TABLE public.user_deck OWNER TO tpl522_6;

--
-- Name: user_deck_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_6
--

ALTER TABLE public.user_deck ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_deck_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: user_collection; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

COPY public.user_collection (name, manacost, originaltext, cmc, imageurl, card_id, id, user_id) FROM stdin;
Selesnya Sanctuary	\N	Selesnya Sanctuary enters the battlefield tapped.\nWhen Selesnya Sanctuary enters the battlefield, return a land you control to its owner's hand.\n{T}: Add {G}{W}.	0	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571663&type=card	1f16e387-647d-5a2c-9570-933171722241	2	7
Spineless Thug	{1}{B}	Spineless Thug can't block.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129743&type=card	e24e5e4e-722f-56ff-9555-9b76303fc6be	3	7
Ashiok, Nightmare Weaver	{1}{U}{B}	+2: Exile the top three cards of target opponent's library.\n-X: Put a creature card with converted mana cost X exiled with Ashiok, Nightmare Weaver onto the battlefield under your control. That creature is a Nightmare in addition to its other types.\n-10: Exile all cards from all opponents' hands and graveyards.	3	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373500&type=card	8e0baa3b-a457-53e7-b6e0-27a1e18194f1	12	3
Olivia Voldaren	{2}{B}{R}	Flying\n{1}{R}: Olivia Voldaren deals 1 damage to another target creature. That creature becomes a Vampire in addition to its other types. Put a +1/+1 counter on Olivia Voldaren.\n{3}{B}{B}: Gain control of target Vampire for as long as you control Olivia Voldaren.	4	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=247235&type=card	b3f04750-9511-54bc-892f-7ac78dc3aae2	13	3
Olivia, Crimson Bride	{4}{B}{R}	Flying, haste\nWhenever Olivia, Crimson Bride attacks, return target creature card from your graveyard to the battlefield tapped and attacking. It gains "When you don't control a legendary Vampire, exile this creature."	6	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=541119&type=card	91153fb8-a021-5b44-b41b-4362b9af9290	14	3
Olivia, Crimson Bride	{4}{B}{R}	Flying, haste\nWhenever Olivia, Crimson Bride attacks, return target creature card from your graveyard to the battlefield tapped and attacking. It gains "When you don't control a legendary Vampire, exile this creature."	6	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=545249&type=card	aa33985d-3379-50ec-b905-116aaeaa91f3	15	3
Edgar Markov	{3}{R}{W}{B}	Eminence — Whenever you cast another Vampire spell, if Edgar Markov is in the command zone or on the battlefield, create a 1/1 black Vampire creature token.\nFirst strike, haste\nWhenever Edgar Markov attacks, put a +1/+1 counter on each Vampire you control.	6	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=433277&type=card	902c9d32-9cb4-55d1-b2e7-30b3539a272e	16	7
Nissa, Steward of Elements	{X}{G}{U}	+2: Scry 2.\n0: Look at the top card of your library. If it's a land card or a creature card with converted mana cost less than or equal to the number of loyalty counters on Nissa, Steward of Elements, you may put that card onto the battlefield.\n−6: Untap up to two target lands you control. They become 5/5 Elemental creatures with flying and haste until end of turn. They're still lands.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426906&type=card	a037ae21-92f8-56cd-91c3-5575933b531f	17	7
Nissa, Steward of Elements	{X}{G}{U}	+2: Scry 2.\n0: Look at the top card of your library. If it's a land card or a creature card with converted mana cost less than or equal to the number of loyalty counters on Nissa, Steward of Elements, you may put that card onto the battlefield.\n−6: Untap up to two target lands you control. They become 5/5 Elemental creatures with flying and haste until end of turn. They're still lands.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426906&type=card	a037ae21-92f8-56cd-91c3-5575933b531f	18	3
\.


--
-- Data for Name: user_deck; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

COPY public.user_deck (name, manacost, originaltext, cmc, imageurl, id, card_id, user_id) FROM stdin;
Ashiok, Nightmare Weaver	{1}{U}{B}	+2: Exile the top three cards of target opponent's library.\n-X: Put a creature card with converted mana cost X exiled with Ashiok, Nightmare Weaver onto the battlefield under your control. That creature is a Nightmare in addition to its other types.\n-10: Exile all cards from all opponents' hands and graveyards.	3	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373500&type=card	18	12	3
Black Lotus	{0}	Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.	0	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card	2	5	3
Ashiok, Nightmare Muse	{3}{U}{B}	+1: Create a 2/3 blue and black Nightmare creature token with "Whenever this creature attacks or blocks, each opponent exiles the top two cards of their library."\n−3: Return target nonland permanent to its owner's hand, then that player exiles a card from their hand.\n−7: You may cast up to three face-up cards your opponents own from exile without paying their mana costs.	5	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476459&type=card	5	6	3
Spineless Thug	{1}{B}	Spineless Thug can't block.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129743&type=card	3	1	3
Nissa, Steward of Elements	{X}{G}{U}	+2: Scry 2.\n0: Look at the top card of your library. If it's a land card or a creature card with converted mana cost less than or equal to the number of loyalty counters on Nissa, Steward of Elements, you may put that card onto the battlefield.\n−6: Untap up to two target lands you control. They become 5/5 Elemental creatures with flying and haste until end of turn. They're still lands.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426906&type=card	19	18	3
Sengir Vampire	{3}{B}{B}	Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhenever a creature dealt damage by Sengir Vampire this turn is put into a graveyard, put a +1/+1 counter on Sengir Vampire.	5	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129724&type=card	1	3	3
Black Lotus	{0}	Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.	0	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card	4	4	3
Olivia, Crimson Bride	{4}{B}{R}	Flying, haste\nWhenever Olivia, Crimson Bride attacks, return target creature card from your graveyard to the battlefield tapped and attacking. It gains "When you don't control a legendary Vampire, exile this creature."	6	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=545249&type=card	6	2	7
Nissa, Steward of Elements	{X}{G}{U}	+2: Scry 2.\n0: Look at the top card of your library. If it's a land card or a creature card with converted mana cost less than or equal to the number of loyalty counters on Nissa, Steward of Elements, you may put that card onto the battlefield.\n−6: Untap up to two target lands you control. They become 5/5 Elemental creatures with flying and haste until end of turn. They're still lands.	2	http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426906&type=card	12	17	7
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

COPY public.users (user_id, firstname, lastname, email, sub) FROM stdin;
3	Alma	Gabriela	alma.bntz@gmail.com	google-oauth2|113819612447826591155
7	Endavin	Sailas	endavin13@gmail.com	google-oauth2|114832409164076175373
\.


--
-- Name: reg_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_6
--

SELECT pg_catalog.setval('public.reg_user_id_seq', 12, true);


--
-- Name: user_collection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_6
--

SELECT pg_catalog.setval('public.user_collection_id_seq', 19, true);


--
-- Name: user_deck_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_6
--

SELECT pg_catalog.setval('public.user_deck_id_seq', 20, true);


--
-- Name: users reg_user_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_6
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT reg_user_pkey PRIMARY KEY (user_id);


--
-- Name: user_collection user_collection_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_6
--

ALTER TABLE ONLY public.user_collection
    ADD CONSTRAINT user_collection_pkey PRIMARY KEY (id);


--
-- Name: user_deck user_deck_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_6
--

ALTER TABLE ONLY public.user_deck
    ADD CONSTRAINT user_deck_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

