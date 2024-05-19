export const correctRoute = (currLink: string) => {
    let link = `/${currLink}`;
    if (currLink === "My Cards") {
        link = `/${currLink.split(" ").join("")}`;
    }
    return link.toLowerCase();
};