<!-- src/lib/Footer.svelte -->
<script>
    let lastUpdated = "Fetching...";

    async function getLastCommitDate() {
        try {
            const response = await fetch(
                "https://api.github.com/repos/alKerim/portfolio2025/commits/main"
            );
            const data = await response.json();
            const commitDate = new Date(data.commit.committer.date);

            // Format the date to a locale-specific date string without time
            lastUpdated = commitDate.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            console.error("Failed to fetch commit date: ", e);
            lastUpdated = "Unable to fetch date";
        }
    }

    getLastCommitDate();
</script>

<footer>
    <p><em>Last updated {lastUpdated}</em></p>
</footer>

<style>
    footer {
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
        color: gray;
    }
</style>



