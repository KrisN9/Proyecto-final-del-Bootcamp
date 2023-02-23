"""empty message

Revision ID: e00e7be8f9a4
Revises: 30ae48703361
Create Date: 2023-02-23 18:17:42.114597

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e00e7be8f9a4'
down_revision = '30ae48703361'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('telephone_number',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('telephone_number',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)

    # ### end Alembic commands ###