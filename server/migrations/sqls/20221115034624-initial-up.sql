/* Replace with your SQL commands */


CREATE TABLE public.users (
    user_id integer NOT NULL,
    firstname text,
    lastname text,
    email text,
    sub text
);


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