<script>
	import Title from '$lib/components/Title.svelte';
	import Link from '$lib/components/Link.svelte';
	import H1 from '$lib/components/H1.svelte';
	import { onMount } from 'svelte';

	let username = $state('user');
	let password = $state('password');
	let users = $state([]);

	const getAllUsers = async () => {
		const response = await fetch('/api/user');
		const data = await response.json();
		if (response.ok) {
			users = data;
		} else {
			alert('Fejl ved hentning af brugere!');
		}
	};

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
			alert('Bruger oprettet!');
		} else {
			alert('Fejl ved oprettelse af bruger!');
		}
		username = '';
		password = '';
	};
	onMount(() => {
		getAllUsers();
	});
</script>

<Title>Administration</Title>

<div class="my-4">
	<H1>Brugeradministration</H1>
	<p>Her kan du oprette nye brugere til systemet.</p>
</div>

<div class="mb-4">
	<input
		id="username"
		type="text"
		bind:value={username}
		placeholder="Indtast brugernavn"
		class="input"
	/>
</div>

<div class="mb-4">
	<input
		id="password"
		type="password"
		bind:value={password}
		placeholder="Indtast adgangskode"
		class="input"
	/>
</div>

<div class="mb-4">
	<button class="btn btn-primary" onclick={createUser}>Opret ny bruger</button>
</div>
<H1>Brugere i systemet</H1>
<ul class="list rounded-box shadow-md">
	{#each users as user}
		<li class="list-row">
			<p><a href={'users/' + user.id}> {user.username}</a></p>
		</li>
	{/each}
</ul>

<div class="mt-4">
	<Link href="/diary">Tilbage til dagbog</Link>
</div>
