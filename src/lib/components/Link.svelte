<script>
	let { href, children } = $props();
</script>

<a {href} class="text-blue-500 hover:text-blue-700">{@render children()}</a>
