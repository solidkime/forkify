class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    // if (!query) throw new Error('No search results :((((((');
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHahdlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
