<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<div class="layout-container">
    {@render children()}
</div>

<style>
    :global(body) {
        font-family: 'Times New Roman'; /* Replace with your desired font */
    }

    :global(h1) {
        font-size: 1.5rem; /* 32px */
        /*margin: 0 0 16px 0; !* Add space below the heading *!*/
    }

    .layout-container {
        /*border: 2px solid #ccc; !* Add a light gray border *!*/
        /*border-radius: 8px; !* Optional: rounded corners *!*/
        padding: 16px; /* Add padding inside the border */
        /*margin: 16px; !* Add space between the border and the screen edges *!*/
        box-sizing: border-box; /* Ensure padding is included in the total width/height */
        max-width: 1200px; /* Optional: limit the width of the container */
        margin-left: auto; /* Center the container horizontally */
        margin-right: auto; /* Center the container horizontally */
    }
</style>
