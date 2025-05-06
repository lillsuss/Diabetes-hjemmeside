<script>
  let videoWatched = false;
  let answers = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: ''
  };

  const startVideo = () => {
    videoWatched = true;
  };

  const submitAnswers = () => {
    alert("Tak for dine svar!");
  };

  const logout = () => {
    alert("Du er nu logget ud.");
    window.location.href = '/login';
  };
</script>

<style>
  body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: white;
    font-family: Arial, sans-serif;
  }

  .full-page-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
  }

  .subtitle {
    font-size: 1rem;
    color: #ddd;
    margin-bottom: 20px;
  }

  .video-container {
    margin-bottom: 20px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-container iframe {
    width: 80%;
    height: 400px;
    border: none;
    border-radius: 8px;
  }

  .btn {
    padding: 14px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 10px 0;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .questions-container {
    display: none;
    margin-top: 20px;
    text-align: left;
  }

  .questions-container.active {
    display: block;
  }

  .input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  label {
    font-size: 1rem;
    color: white;
    display: block;
    margin-top: 10px;
  }

  .logout-btn {
    margin-top: 20px;
    background-color: #dc3545;
    padding: 12px 18px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .logout-btn:hover {
    background-color: #c82333;
  }
</style>

<div class="full-page-container">
  <div class="title">Velkommen til din diabetesrejse</div>

  <p class="subtitle">Her kan du se en video om insulinpen og besvare nogle spørgsmål.</p>

  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/oWjU3wiIscg?autoplay=1" title="Diabetes Overview Video"></iframe>
  </div>

  <button class="btn" onclick={startVideo}>Start videoen</button>

  <div class="questions-container {videoWatched ? 'active' : ''}">
    <h2>Spørgsmål efter videoen:</h2>

    <label for="question1">1. Har du set videoen?</label>
    <input class="input" bind:value={answers.question1} type="text" placeholder="Ja eller Nej" />

    <label for="question2">2. Hvad er formålet med en insulinpen?</label>
    <input class="input" bind:value={answers.question2} type="text" placeholder="Din besvarelse" />

    <label for="question3">3. Hvad skal du gøre før du bruger insulinpennen?</label>
    <input class="input" bind:value={answers.question3} type="text" placeholder="Din besvarelse" />

    <label for="question4">4. Hvordan indstiller man dosen på insulinpennen?</label>
    <input class="input" bind:value={answers.question4} type="text" placeholder="Din besvarelse" />

    <label for="question5">5. Hvilket område på kroppen bør insulinpennen bruges til?</label>
    <input class="input" bind:value={answers.question5} type="text" placeholder="Din besvarelse" />

    <label for="question6">6. Hvordan håndteres nålen før og efter brug?</label>
    <input class="input" bind:value={answers.question6} type="text" placeholder="Din besvarelse" />

    <label for="question7">7. Hvad er vigtigt at gøre efter brug af insulinpennen?</label>
    <input class="input" bind:value={answers.question7} type="text" placeholder="Din besvarelse" />

    <label for="question8">8. Hvordan opbevares insulinpennen korrekt?</label>
    <input class="input" bind:value={answers.question8} type="text" placeholder="Din besvarelse" />

    <label for="question9">9. Hvad kan man gøre, hvis der opstår problemer med insulinpennen?</label>
    <input class="input" bind:value={answers.question9} type="text" placeholder="Din besvarelse" />

    <label for="question10">10. Hvordan sikrer man, at insulinpennen er steril?</label>
    <input class="input" bind:value={answers.question10} type="text" placeholder="Din besvarelse" />

    <button class="btn" onclick={submitAnswers}>Send svar</button>
  </div>

  <button class="logout-btn" onclick={logout}>Log ud</button>
</div>
