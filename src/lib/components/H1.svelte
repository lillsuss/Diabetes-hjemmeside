<script>
    let { center = false, children } = $props();
</script>

<h1 class="text-2xl font-bold mb-4 {center ? 'text-center' : ''}">
    {@render children()}
</h1>
