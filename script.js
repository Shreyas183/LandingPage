fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const assets = data.tasks[0].assets;
    const grid = document.getElementById("assetGrid");
    const list = document.getElementById("journeyList");

    assets.forEach(a => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header">${a.asset_title}</div>
        <div class="card-body">
          <p>${a.asset_description || ""}</p>
          ${renderContent(a)}
        </div>
      `;
      grid.appendChild(card);

      const li = document.createElement("li");
      li.textContent = a.asset_title;
      list.appendChild(li);
    });
  });

function renderContent(a) {
  if (a.asset_content_type === "video") {
    return `<iframe src="${a.asset_content.trim()}" allowfullscreen></iframe>`;
  }
  if (a.asset_type === "input_asset") {
    return `<textarea style="width:100%;height:100px;"></textarea>`;
  }
  return `<a href="${a.asset_content}" target="_blank">Read more</a>`;
}

document.getElementById("openJourney").onclick = () =>
  document.getElementById("journeyPanel").classList.remove("hidden");

document.getElementById("closeJourney").onclick = () =>
  document.getElementById("journeyPanel").classList.add("hidden");
