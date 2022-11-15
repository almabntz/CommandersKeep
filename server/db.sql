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
    id text NOT NULL,
    name text,
    manacost text,
    originaltext text,
    cmc text,
    imageurl text,
    user_id text
);


ALTER TABLE public.user_collection OWNER TO tpl522_6;

--
-- Data for Name: user_collection; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

INSERT INTO public.user_collection (id, name, manacost, originaltext, cmc, imageurl, user_id) VALUES ('"f6d90436-54ff-57a8-a056-9173159788d4"', 'Elesh Norn, Grand Cenobite', '{5}{W}{W}', '"Vigilance\nOther creatures you control get +2/+2.\nCreatures your opponents control get -2/-2."', '7', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=547444&type=card', '3');
INSERT INTO public.user_collection (id, name, manacost, originaltext, cmc, imageurl, user_id) VALUES ('b62db1a4-630f-56d5-bd12-ed41271c6e0f', 'Aspect of Wolf', '{1}{G}', 'Target creature''s power and toughness are increased by half the number of forests you have in play, rounding down for power and up for toughness.', '2', NULL, '3');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

INSERT INTO public.users (user_id, firstname, lastname, email, sub) OVERRIDING SYSTEM VALUE VALUES (1, 'test', 'user', NULL, NULL);
INSERT INTO public.users (user_id, firstname, lastname, email, sub) OVERRIDING SYSTEM VALUE VALUES (2, 'alpha', 'test', 'beta', 'omega');
INSERT INTO public.users (user_id, firstname, lastname, email, sub) OVERRIDING SYSTEM VALUE VALUES (3, 'Alma', 'Gabriela', 'alma.bntz@gmail.com', 'google-oauth2|113819612447826591155');


--
-- Name: reg_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_6
--

SELECT pg_catalog.setval('public.reg_user_id_seq', 4, true);


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
-- PostgreSQL database dump complete
--

