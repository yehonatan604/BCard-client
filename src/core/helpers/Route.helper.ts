// this function is used to correct the route path for the navbar
export const correctRoute = (currLink: string) => {
    let link = `/${currLink}`;
    if (currLink === "My Cards") {
        link = `/${currLink.split(" ").join("")}`;
    }
    return link.toLowerCase();
};