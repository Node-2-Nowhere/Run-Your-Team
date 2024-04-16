const newLeagueHandler = async (event) => {
  event.preventDefault();

  const leagueName = document.querySelector("").value.trim();

  const response = await fetch(`/api/league`, {
    method: "POST",
    body: JSON.stringify({ leagueName }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add team");
  }
};

const newTeamHandler = async (event) => {
  event.preventDefault();

  const teamName = document.querySelector("").value.trim();
  const league = document.querySelector("").value.trim();

  const response = await fetch(`/api/team`, {
    method: "POST",
    body: JSON.stringify({ teamName, league }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add team");
  }
};

const newMatchHandler = async (event) => {
  event.preventDefault();

  const matchDate = document.querySelector("").value.trim();
  const homeTeam = document.querySelector("").value.trim();
  const awayTeam = document.querySelector("").value.trim();
  const winner = document.querySelector("").value.trim();

  const response = await fetch(`/api/match`, {
    method: "POST",
    body: JSON.stringify({ matchDate, homeTeam, awayTeam, winner }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add match");
  }
};

const updateTeamHandler = async (event) => {
  event.preventDefault();

  const teamName = document.querySelector("").value.trim();
  const league = document.querySelector("").value.trim();

  const response = await fetch(`/api/team`, {
    method: "PUT",
    body: JSON.stringify({ teamName, league }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update team");
  }
};

const updateMatchHandler = async (event) => {
  event.preventDefault();

  const matchDate = document.querySelector("").value.trim();
  const homeTeam = document.querySelector("").value.trim();
  const awayTeam = document.querySelector("").value.trim();
  const winner = document.querySelector("").value.trim();

  const response = await fetch(`/api/match`, {
    method: "PUT",
    body: JSON.stringify({ matchDate, homeTeam, awayTeam, winner }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update match");
  }
};

const getTeamHandler = async (event) => {
  event.preventDefault();

  const teamName = document.querySelector("").value.trim();
  const league = document.querySelector("").value.trim();

  const response = await fetch(`/api/team`, {
    method: "GET",
    body: JSON.stringify({ teamName, league }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update team");
  }
};

const getMatchHandler = async (event) => {
  event.preventDefault();

  const matchDate = document.querySelector("").value.trim();
  const homeTeam = document.querySelector("").value.trim();
  const awayTeam = document.querySelector("").value.trim();
  const winner = document.querySelector("").value.trim();

  const response = await fetch(`/api/match`, {
    method: "GET",
    body: JSON.stringify({ matchDate, homeTeam, awayTeam, winner }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update match");
  }
};

document.querySelector("").addEventListener("", newTeamHandler);
document.querySelector("").addEventListener("", newMatchHandler);
document.querySelector("").addEventListener("", newLeagueHandler);
document.querySelector("").addEventListener("", updateMatchHandler);
document.querySelector("").addEventListener("", updateTeamHandler);
document.querySelector("").addEventListener("", getMatchHandler);
document.querySelector("").addEventListener("", getTeamHandler);