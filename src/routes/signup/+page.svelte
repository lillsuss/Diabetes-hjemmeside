<script>
  import { goto } from '$app/navigation';
  import Title from '$lib/components/Title.svelte';
  import Link from '$lib/components/Link.svelte';
  import H1 from '$lib/components/H1.svelte';

  let username = $state('user');
  let password = $state('password');

  const createUser = async () => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    await response.json();
    if (response.ok) {
      alert('Konto oprettet! Du kan nu logge ind.');
      goto('/');
    } else {
      alert('Fejl ved oprettelse af konto!');
    }
    username = '';
    password = '';
  };
</script>

<style>
  /* Ensures the body takes the full height of the viewport */
  body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;  /* Centers content horizontally */
    align-items: center;  /* Centers content vertically */
    background-color: #f7fafc;  /* Soft background color */
    font-family: Arial, sans-serif;
  }

  /* Full page container to ensure content is centered */
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

  .login-container {
    padding: 20px;
    background-color: transparent;  /* No extra background color, just the content */
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    font-family: Arial, sans-serif;
    box-shadow: none;  /* No shadow */
  }

  .input {
    width: 100%;
    padding: 12px;
    margin: 12px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .btn {
    width: 100%;
    padding: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .link {
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }

  .link:hover {
    text-decoration: underline;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
</style>

<div class="full-page-container">
  <div class="login-container">
    <Title class="title">Opret ny konto</Title>

    <H1 class="subtitle">Ny bruger</H1>
    <p class="mb-4">Opret en ny bruger for at få adgang til systemet.</p>

    <input id="username" type="email" bind:value={username} placeholder="Indtast email" class="input block mb-4" />
    <input id="password" type="password" bind:value={password} placeholder="Indtast adgangskode" class="input block mb-4" />

    <button class="btn btn-primary mb-4" onclick={createUser}>Opret konto</button>

    <Link href="/">Tilbage til login</Link>
  </div>
</div>
