let data = JSON.parse(localStorage.getItem("dataKeuangan") || "[]");

function renderChart() {
  const ctx = document.getElementById("chart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map(d => d.judul),
      datasets: [{
        label: "Pengeluaran",
        data: data.map(d => d.jumlah),
        borderWidth: 1
      }]
    }
  });
}

function renderList() {
  const list = document.getElementById("riwayat");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.judul} - Rp${item.jumlah.toLocaleString()}`;
    list.appendChild(li);
  });
}

function tambahData() {
  const judul = document.getElementById("judul").value;
  const jumlah = Number(document.getElementById("jumlah").value);

  if (!judul || !jumlah) return alert("Isi semua data!");

  data.push({ judul, jumlah });
  localStorage.setItem("dataKeuangan", JSON.stringify(data));

  renderChart();
  renderList();
}

renderChart();
renderList();
