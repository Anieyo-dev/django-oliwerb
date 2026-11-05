from django.contrib.auth import get_user_model
from django.test import TestCase


class UsersManagerTests(TestCase):

    userAttrs = {
        'email': 'normal@user.com',
        'password': 'password',
        'superEmail': 'admin@user.com',
        'superPass': 'password'
    }

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(email=self.userAttrs['email'],
                                        password=self.userAttrs['password'])
        self.assertEqual(user.email, self.userAttrs['email'])
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            User.objects.create_user(email='', password='foo')

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(email=self.userAttrs['superEmail'],
                                                   password=self.userAttrs['superPass'])
        self.assertEqual(admin_user.email, self.userAttrs['superEmail'])
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the abstractBaseUser option
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email=self.userAttrs['superEmail'], password=self.userAttrs['superPass'], is_superuser=False
            )