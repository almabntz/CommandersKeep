/* Replace with your SQL commands */

CREATE TABLE public.users (
    user_id SERIAL PRIMARY KEY,
    firstname text,
    lastname text,
    email text,
    sub text
);


CREATE TABLE public.user_collection (
    id SERIAL PRIMARY KEY,
    name text,
    manacost text,
    originaltext text,
    cmc text,
    imgurl text,
    user_id text
);

