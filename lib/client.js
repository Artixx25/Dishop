import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: 'dbhph9mf',
    dataset: 'production',
    apiVersion: '2023-07-28',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN_XD
})

const builder = ImageUrlBuilder(client);

export const urlFor = source => builder.image(source)