<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const userid = $page.params.id;

	let user = $state(undefined);

	onMount(async () => {
		// Fetch user data based on userid
		const res = await fetch(`/api/user/${userid}`);
		if (res.ok) {
			user = await res.json();
		} else {
			alert('Fejl ved hentning af brugerdata!');
		}
	});
</script>

{userid}
<p>Her kan du se oplysninger om brugeren.</p>
<div>
	{user?.id} - {user?.username}
</div>

<i>Der er ikke så mange spændende oplysninger <endnu class=""></endnu></i>
