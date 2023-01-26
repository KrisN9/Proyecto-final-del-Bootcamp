"""empty message

Revision ID: 8a508695f5b1
Revises: 
Create Date: 2023-01-26 14:55:17.421234

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8a508695f5b1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('city',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('supplier',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('company_name', sa.String(length=80), nullable=False),
    sa.Column('company_cif', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('city_id', sa.Integer(), nullable=False),
    sa.Column('telephone_number', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('company_cif'),
    sa.UniqueConstraint('company_name'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('city_id', sa.Integer(), nullable=False),
    sa.Column('telephone_number', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('offer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_supplier', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=250), nullable=False),
    sa.Column('company_name', sa.String(length=80), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('url_image', sa.String(length=250), nullable=False),
    sa.Column('url', sa.String(length=250), nullable=False),
    sa.Column('location', sa.String(length=250), nullable=False),
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
    op.drop_table('city')
    # ### end Alembic commands ###