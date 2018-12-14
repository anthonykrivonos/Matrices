
class Matrix {

      constructor(rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.structure = [];
            for (var i = 0; i < rows; i++) {
                  this.structure.push(new Array(columns).fill(0));
            }
      }

      set(value, r, c) {
            this.structure[r][c] = value;
      }

      get(r, c) {
            return this.structure[r][c];
      }

      isSquare() {
            return this.rows = this.columns
      }

      getDiagonal() {
            let diagonal = [];
            for (var i = 0; i < Math.min(this.rows, this.columns); i++) {
                  diagonal.push(this.get(i, i));
            }
            return diagonal;
      }

      toString() {
            return this.structure.toString();
      }

}

let mat1 = new Matrix(4, 4);
mat1.set(1, 0, 0);
mat1.set(1, 1, 1);
mat1.set(1, 2, 2);
mat1.set(1, 3, 3);

console.log(mat1.getDiagonal());