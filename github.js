class Github {
    constructor() { 
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profile = await fetch(`https://api.github.com/users/${user}`);
        const repo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
        const data = await profile.json();
        const data_repo = await repo.json();
        return {
            data, 
            data_repo
        }
    }
}