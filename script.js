function searchDevelopers() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    const developers = input === "web developer" ? [
        { name: "Alice Johnson", skills: "HTML, CSS, JavaScript", profile: "alice-johnson.html", img: "/images/alice.jpg" },
        { name: "Michael Lee", skills: "React, Node.js, MongoDB", profile: "michael-lee.html", img: "/images/michele.jpg" },
        { name: "Sara Tan", skills: "Vue.js, Firebase, UX Design", profile: "sara-tan.html", img: "./images/sara.jpg" },
        { name: "David Smith", skills: "Angular, TypeScript, Web Accessibility", profile: "david-smith.html", img: "/images/d3.jpg" },
        { name: "Emily Davis", skills: "Responsive Design, Bootstrap, jQuery", profile: "emily-davis.html", img: "./images/WhatsApp Image 2024-11-02 at 18.58.18_37969fe9.jpg" },
    ] : input === "designer" ? [
        { name: "John", skills: "Adobe Photoshop, Adobe Illustrator, User Research", profile: "alice-johnson.html", img: "/images/d1.jpg" },
        { name: "Ashik", skills: "Color Theory, Wireframing and Prototyping, Responsive Design", profile: "sara-tan.html", img: "/images/d3.jpg" },
        { name: "Akshay", skills: "Adobe XD / Figma, Wireframing and Prototyping", profile: "david-smith.html", img: "/images/d4.jpg" },
        { name: "Ramesh", skills: "Adobe After Effects, Adobe Premiere Pro, 3D Modeling", profile: "emily-davis.html", img: "./images/WhatsApp Image 2024-11-02 at 18.58.18_37969fe9.jpg" },
    ] : [];

    if (developers.length > 0) {
        developers.forEach(dev => {
            const card = document.createElement("div");
            card.className = "developer-card";
            card.innerHTML = `
                <img src="${dev.img}" alt="${dev.name}" class="developer-photo">
                <h3>${dev.name}</h3>
                <p><strong>Skills:</strong> ${dev.skills}</p>
                <a href="messaging.html?developer=${encodeURIComponent(dev.name)}" class="profile-action">Connect</a>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = `<p>No results found for "${input}".</p>`;
    }
}
