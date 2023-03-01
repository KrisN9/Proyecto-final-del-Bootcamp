"""empty message

Revision ID: 0626de9c74b0
Revises: 82f71c70662c
Create Date: 2023-03-01 15:35:30.511229

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0626de9c74b0'
down_revision = '82f71c70662c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('offer', schema=None) as batch_op:
        batch_op.alter_column('company_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('offer', schema=None) as batch_op:
        batch_op.alter_column('company_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)

    # ### end Alembic commands ###
