export type ICard = {
    _id: string;
    image: {
        url: string;
        alt: string;
    };
    title: string;
    subtitle: string;
    description: string;
    likes: string[];
};
