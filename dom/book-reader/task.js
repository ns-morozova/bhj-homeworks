const fontSize = document.querySelectorAll('.font-size');

for (const fontS of fontSize) {
    fontS.onclick = (event) => {
        const fontSizeActive = document.getElementsByClassName('font-size_active')[0];
        fontSizeActive.classList.remove('font-size_active');

        const current = event.currentTarget;
        current.classList.add('font-size_active');

        const book = document.getElementsByClassName('book')[0];
        if (current.classList.contains('font-size_big')) {
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            book.classList.add('book_fs-big');
        } else if (current.classList.contains('font-size_small')) {
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            book.classList.add('book_fs-small');

        } else {
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
        }
        return false; // для того чтобы при клике не обновлялась страница
    }
}


const controlColor = document.getElementsByClassName('book__control_color')[0];
const textColor = controlColor.getElementsByTagName('a');

for (const textC of textColor) {
    textC.onclick = (event) => {
       
        const textColorActive = document.getElementsByClassName('color_active')[0];
        textColorActive.classList.remove('color_active');

        const current = event.currentTarget;
        current.classList.add('color_active');

        const book = document.getElementsByClassName('book')[0];
        if (current.classList.contains('text_color_black')) {
            if (book.classList.contains('book_color-gray')) {
                book.classList.remove('book_color-gray');
            }
            if (book.classList.contains('book_color-whitesmoke')) {
                book.classList.remove('book_color-whitesmoke');
            }
            book.classList.add('book_color-black');
        } else if (current.classList.contains('text_color_gray')) {
            if (book.classList.contains('book_color-black')) {
                book.classList.remove('book_color-black');
            }
            if (book.classList.contains('book_color-whitesmoke')) {
                book.classList.remove('book_color-whitesmoke');
            }
            book.classList.add('book_color-gray');
        } else {
            if (book.classList.contains('book_color-gray')) {
                book.classList.remove('book_color-gray');
            }
            if (book.classList.contains('book_color-black')) {
                book.classList.remove('book_color-black');
            }
            book.classList.add('book_color-whitesmoke');
        }
        return false; // для того чтобы при клике не обновлялась страница
    }
}


const controlBackground = document.getElementsByClassName('book__control_background')[0];
const bgColor = controlBackground.getElementsByTagName('a');

for (const bgC of bgColor) {
    bgC.onclick = (event) => {
       
        const backgroundColor = document.getElementsByClassName('color_active')[0];
        backgroundColor.classList.remove('color_active');

        const current = event.currentTarget;
        current.classList.add('color_active');

        const book = document.getElementsByClassName('book')[0];
        if (current.classList.contains('bg_color_black')) {
            if (book.classList.contains('book_bg-gray')) {
                book.classList.remove('book_bg-gray');
            }
            if (book.classList.contains('book_bg-white')) {
                book.classList.remove('book_bg-white');
            }
            book.classList.add('book_bg-black');
        } else if (current.classList.contains('bg_color_gray')) {
            if (book.classList.contains('book_bg-black')) {
                book.classList.remove('book_bg-black');
            }
            if (book.classList.contains('book_bg-white')) {
                book.classList.remove('book_bg-white');
            }
            book.classList.add('book_bg-gray');
        } else {
            if (book.classList.contains('book_bg-gray')) {
                book.classList.remove('book_bg-gray');
            }
            if (book.classList.contains('book_bg-black')) {
                book.classList.remove('book_bg-black');
            }
            book.classList.add('book_bg-white');
        }
        return false; // для того чтобы при клике не обновлялась страница
    }
}





















