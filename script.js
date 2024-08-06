// Handle Parent Sign In
document.getElementById('parentSignInForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('parentName').value;
    const email = document.getElementById('parentEmail').value;
    const password = document.getElementById('parentPassword').value;

    const parentAccount = {
        name,
        email,
        password
    };

    localStorage.setItem('parentAccount', JSON.stringify(parentAccount));
    alert('Parent account created successfully!');
    window.location.href = 'parent-login.html';
});

// Handle Parent Log In
document.getElementById('parentLoginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('parentLoginEmail').value;
    const password = document.getElementById('parentLoginPassword').value;
    const parentAccount = JSON.parse(localStorage.getItem('parentAccount'));

    if (parentAccount && parentAccount.email === email && parentAccount.password === password) {
        alert('Logged in successfully!');
        window.location.href = 'parent.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Handle Child Sign In
document.getElementById('childSignInForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const parentAccount = JSON.parse(localStorage.getItem('parentAccount'));
    if (!parentAccount) {
        alert('Please create a parent account first.');
        return;
    }

    const name = document.getElementById('childName').value;
    const email = document.getElementById('childEmail').value;
    const password = document.getElementById('childPassword').value;

    const childAccount = {
        name,
        email,
        password
    };

    localStorage.setItem('childAccount', JSON.stringify(childAccount));
    alert('Child account created successfully!');
    window.location.href = 'child-login.html';
});

// Handle Child Log In
document.getElementById('childLoginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('childLoginEmail').value;
    const password = document.getElementById('childLoginPassword').value;
    const childAccount = JSON.parse(localStorage.getItem('childAccount'));

    if (childAccount && childAccount.email === email && childAccount.password === password) {
        alert('Logged in successfully!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Check if parent is logged in before accessing child page
if (window.location.pathname.includes('index.html')) {
    const childAccount = JSON.parse(localStorage.getItem('childAccount'));
    if (!childAccount) {
        alert('Please log in as a child first.');
        window.location.href = 'child-login.html';
    }
}
