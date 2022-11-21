/* Replace with your SQL commands */


CREATE TABLE public.users (
    user_id SERIAL PRIMARY KEY
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
    id SERIAL PRIMARY KEY,
    user_id integer
);


CREATE TABLE public.user_deck (
    name text,
    manacost text,
    originaltext text,
    cmc text,
    imageurl text,
    id SERIAL PRIMARY KEY,
    card_id text,
    user_id integer
);