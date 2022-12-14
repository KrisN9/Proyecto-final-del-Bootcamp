"""empty message

Revision ID: f352708b38a4
Revises: 
Create Date: 2023-01-09 19:08:26.468037

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f352708b38a4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('login',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('type_user', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('supplier',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('company_name', sa.String(length=80), nullable=False),
    sa.Column('company_cif', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('city', sa.String(length=80), nullable=False),
    sa.Column('telephone_number', sa.String(length=80), nullable=False),
    sa.Column('id_login', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_login'], ['login.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('company_cif'),
    sa.UniqueConstraint('company_name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('city', sa.String(length=80), nullable=False),
    sa.Column('telephone_number', sa.String(length=80), nullable=False),
    sa.Column('id_login', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_login'], ['login.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('offer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_supplier', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.Column('location', sa.String(length=200), nullable=False),
    sa.ForeignKeyConstraint(['id_supplier'], ['supplier.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=False),
    sa.Column('id_offer', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_offer'], ['offer.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite')
    op.drop_table('offer')
    op.drop_table('user')
    op.drop_table('supplier')
    op.drop_table('login')
    # ### end Alembic commands ###
